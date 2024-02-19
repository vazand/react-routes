import React from "react";
import { Link, useParams } from "react-router-dom";

function Post({ post }) {
  //const { id } = useParams();
  return (
    <article className="bg-gray-400 p-2 rounded-lg ">
      <h2 className="text-lg">{post.title}</h2>
      <p className="text-xs">{post.dateTime}</p>
      <p className="text-base">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}{" "}
      </p>
    </article>
  );
}

/* {<div>
  <h1>You are in Post {id}</h1>
  { <Link to={"/postPage/newPost"}>New Post</Link> }
</div>} */
export default Post;


/* ,
        {
            "id": 2,
            "title": "Zoro's Aspiration",
            "dateTime": "2024-01-27T12:30:00",
            "body": "Zoro, the swordsman, aspires to become the world's greatest swordsman. He constantly trains to achieve this goal and protect his friends."
        },
        {
            "id": 3,
            "title": "Nami's Navigation Skills",
            "dateTime": "2024-01-27T13:00:00",
            "body": "Nami is the crew's navigator, using her exceptional navigational skills to guide the Straw Hat Pirates through the Grand Line and other dangerous seas."
        },
        {
            "id": 4,
            "title": "Usopp's Tall Tales",
            "dateTime": "2024-01-27T13:30:00",
            "body": "Usopp, the crew's sharpshooter, is known for telling tall tales and creating incredible stories. Despite this, his heart is always in the right place."
        },
        {
            "id": 5,
            "title": "Sanji's Culinary Excellence",
            "dateTime": "2024-01-27T14:00:00",
            "body": "Sanji, the Straw Hat's cook, is a master of the culinary arts. His dream is to find the All Blue, a legendary sea where fish from all over the world gather."
        },
        {
            "id": 6,
            "title": "Chopper's Medical Expertise",
            "dateTime": "2024-01-27T14:30:00",
            "body": "Chopper, the crew's doctor, is a reindeer who consumed the Human-Human Fruit. He uses his medical expertise to heal his friends and allies."
        },
        {
            "id": 7,
            "title": "Robin's Search for Knowledge",
            "dateTime": "2024-01-27T15:00:00",
            "body": "Robin is an archaeologist with a deep thirst for knowledge. She seeks to uncover the mysteries of the Void Century and the true history of the world."
        },
        {
            "id": 8,
            "title": "Franky's Shipbuilding Skills",
            "dateTime": "2024-01-27T15:30:00",
            "body": "Franky, the shipwright, is known for his exceptional shipbuilding skills. He designed and built the Straw Hat Pirates' ship, the Thousand Sunny."
        },
        {
            "id": 9,
            "title": "Brook's Musical Passion",
            "dateTime": "2024-01-27T16:00:00",
            "body": "Brook, the musician of the crew, is a living skeleton with a passion for music. He plays the violin and entertains the crew with his musical talents."
        },
        {
            "id": 10,
            "title": "Jinbei's Fish-Man Karate",
            "dateTime": "2024-01-27T16:30:00",
            "body": "Jinbei, a Fish-Man and helmsman of the Straw Hat Pirates, is a master of Fish-Man Karate. He brings his formidable martial arts skills to the crew's battles."
        } */