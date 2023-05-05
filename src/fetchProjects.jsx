import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const projects = res.items.map(item => {
        const { sys: { id }, fields: { title, url, image }} = item;
        const img = image?.fields?.file?.url
        return { id, img, title, url }
      })
      setProjects(projects)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  return { loading, projects }
}

