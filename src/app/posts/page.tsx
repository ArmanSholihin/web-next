import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/lib/api";
import PostList from "@/components/PostsList";

export default async function Page() {
  const posts = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem velit deserunt placeat nihil exercitationem omnis autem perferendis error saepe?</p>
      </div>
      <PostList posts={posts}/>
    </>
  );
}
