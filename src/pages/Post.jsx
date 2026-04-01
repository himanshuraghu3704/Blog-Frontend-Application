import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/confi";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full mb-8 relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group bg-gray-900 flex justify-center">
                    <div 
                        className="absolute inset-0 z-0 opacity-50 blur-2xl scale-125 transition-transform duration-700 group-hover:scale-150"
                        style={{
                            backgroundImage: `url(${appwriteService.getFilePreview(post.featuredImage)})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    ></div>
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="relative z-10 max-h-[500px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {isAuthor && (
                        <div className="absolute z-20 right-2 top-2 sm:right-6 sm:top-6 flex items-center gap-1 sm:gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" className="text-sm px-2 py-1 sm:text-base sm:px-4 sm:py-2" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-10 text-center max-w-4xl mx-auto px-4 mt-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
                </div>
                <div className="browser-css max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed space-y-4 px-4 pb-12">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}