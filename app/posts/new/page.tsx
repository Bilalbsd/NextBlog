"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import des styles par défaut de React Quill
import { useState, useEffect, SetStateAction } from "react";
import { createArticle } from "../actions/actions";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function NewArticlePage() {
    const [content, setContent] = useState("");

    const handleContentChange = (value: SetStateAction<string>) => {
        setContent(value);
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Créer un nouvel article</h1>
            <form action={createArticle} className="space-y-4">
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Titre
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Catégorie
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Contenu
                    </label>
                    <input
                        type="text"
                        name="content"
                        value={content}
                        style={{ display: "none" }}
                        readOnly
                    />
                    <ReactQuill
                        id="content"
                        className="mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        modules={{
                            toolbar: [
                                [
                                    { header: "1" },
                                    { header: "2" },
                                    { font: [] },
                                ],
                                [{ size: [] }],
                                [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    "blockquote",
                                ],
                                [{ list: "ordered" }, { list: "bullet" }],
                                ["link", "image", "video"],
                                ["clean"],
                            ],
                        }}
                        placeholder="Écrivez votre contenu ici..."
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Créer l'article
                    </button>
                </div>
            </form>
        </div>
    );
}
