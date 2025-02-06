"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { cookies } from "next/headers";

interface DashboardContextProps {
  totalSubscriber: number | null;
  totalProjects: number | null;
  totalArticles: number | null;
  totalMedias: number | null;
  allEditor: any | null;
  articles: any | null;
  projects: any | null;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined,
);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [totalSubscriber, setTotalSubscriber] = useState<number | null>(null);
  const [allEditor, setEditorData] = useState<any | null>(null);
  const [totalProjects, setTotalProjects] = useState<number | null>(null);
  const [totalArticles, setTotalArticles] = useState<number | null>(null);
  const [totalMedias, setTotalMedias] = useState<number | null>(null);
  const [articles, setArticleData] = useState<any | null>(null);
  const [projects, setProjectData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allEditors = await axios.get(
          "http://localhost:4000/user/editor",
          { withCredentials: true },
        );
        setEditorData(allEditors.data.data);

        const responseSubscriber = await axios.get(
          "http://localhost:4000/user",
          { withCredentials: true },
        );
        setTotalSubscriber(responseSubscriber.data.data.length);

        const responseProjects = await axios.get(
          "http://localhost:4000/articles/project",
          { withCredentials: true },
        );
        setProjectData(responseProjects.data.data);
        setTotalProjects(responseProjects.data.data.length);

        const responseArticles = await axios.get(
          "http://localhost:4000/articles/article",
          { withCredentials: true },
        );
        setArticleData(responseArticles.data.data);
        setTotalArticles(responseArticles.data.data.length);

        const responseMedias = await axios.get(
          "http://localhost:4000/articles/medias",
          { withCredentials: true },
        );
        setTotalMedias(responseMedias.data.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        totalSubscriber,
        totalProjects,
        totalArticles,
        totalMedias,
        allEditor,
        articles,
        projects,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboard doit être utilisé à l'intérieur de DashboardProvider",
    );
  }
  return context;
};
