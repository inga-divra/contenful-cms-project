import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
    space: 'p2yzlou2fp2m',
    environment: 'master',
    accessToken: 'fnMkwsTiuaQLmkh5buW1SJH6fWBeS3H6lEeAotnyi2I',
});

//custom hook
export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'projects' });
            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { title, url, id, img };
            });
            setProjects(projects);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return { loading, projects };
};
