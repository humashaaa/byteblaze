import { Link, Outlet, useLoaderData } from "react-router-dom";
import placeholderimage from '../assets/404.jpg'

const Content = () => {

    const blog = useLoaderData();
     const {public_reactions_count,comments_count, reading_time_minutes,tags,cover_image, title, description,published_at,body_html} = blog
    return (
        <div className=" border-2  border-primary  border-opacity-30 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderimage} />
        <div className="p-5 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            {body_html}
        </div>
    </div>
    );
};

export default Content;