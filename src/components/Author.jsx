import { Link, Outlet, useLoaderData } from "react-router-dom";

const Author = () => {
    const blog = useLoaderData();
    const {public_reactions_count, title, description,published_at, id,comments_count, reading_time_minutes,tags,cover_image, title, description,published_at, id} = blog



    return (
        <div>
            <h1>authorrrrrrr</h1>
        </div>
    );
};

export default Author;