"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { cookies } from "next/headers";
import Cookies from "js-cookie";
import { getDecodedToken } from "@/utils/auth";

interface DashboardContextProps {
  totalSubscriber: number | null;
  totalProjects: number | null;
  totalArticles: number | null;
  totalMedias: number | null;
  allEditor: any | null;
  articles: any | null;
  projects: any | null;
  data: any;
  isAllowed: boolean;
  setData: (value: any) => void;
  setIsAllowed: (value: any) => void;
  role: string;
  setRole: (value: any) => void;
  token: any | null;
  setToken: (value: any) => void;
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
  const [data, setData] = useState<any>(null);
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const [role, setRole] = useState<string>("");
  const [token, setToken] = useState<any | null>(null);

  useEffect(() => {
    const decodedToken = getDecodedToken();
    if (decodedToken) {
      setToken(decodedToken);
      setRole(decodedToken.role);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSubscriber = await axios.get(
          "http://localhost:4000/user",
          { withCredentials: true },
        );
        // console.log(responseSubscriber.data);
        setTotalSubscriber(responseSubscriber.data.data?.length);

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
        // console.log(responseArticles);
        setArticleData(responseArticles.data.data);
        setTotalArticles(responseArticles.data.data.length);

        const responseMedias = await axios.get(
          "http://localhost:4000/articles/medias",
          { withCredentials: true },
        );
        setTotalMedias(responseMedias.data.data);

        if(role == "admin") {
          const allEditors = await axios.get(
            "http://localhost:4000/user/editor",
            { withCredentials: true },
          );
          setEditorData(allEditors.data?.data);

        }
      } catch (error) {
        // console.log(error);
      }
    };

    fetchData();
  }, [projects]);

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
        data,
        setData,
        isAllowed,
        setIsAllowed,
        role,
        setRole,
        token,
        setToken,
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
