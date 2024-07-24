import { createClient } from 'contentful';

const client = createClient({
    space: 'p2yzlou2fp2m',
    environment: 'master',
    accessToken: 'fnMkwsTiuaQLmkh5buW1SJH6fWBeS3H6lEeAotnyi2I',
});

client.getEntries({ content_type: 'projects' }).then((response) => console.log(response))