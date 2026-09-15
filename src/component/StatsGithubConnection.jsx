import { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  FaCodeBranch,
  FaRocket,
  FaLayerGroup,
  FaAward,
} from "react-icons/fa6";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

const STAT_META = {
  0: { icon: FaAward, gradient: "from-cyan-400 to-blue-500", glow: "shadow-cyan-500/20" },
  1: { icon: FaRocket, gradient: "from-pink-500 to-rose-500", glow: "shadow-pink-500/20" },
  2: { icon: FaCodeBranch, gradient: "from-green-400 to-emerald-500", glow: "shadow-green-500/20" },
  3: { icon: FaLayerGroup, gradient: "from-purple-500 to-indigo-500", glow: "shadow-purple-500/20" },
};

const Stats = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const [techCount, setTechCount] = useState(0);

  const username = import.meta.env.VITE_Github_Uername;
  const token = import.meta.env.VITE_Github_Access_Token;

  useEffect(() => {
    const fetchGitHubStats = async () => {
      const query = `
        {
          user(login: "${username}") {
            repositories(first: 100, privacy: PUBLIC) {
              totalCount
              nodes {
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                }
                languages(first: 10) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const json = await response.json();

        if (json.errors) {
          console.error("GitHub API error:", json.errors);
          return;
        }

        const repos = json?.data?.user?.repositories?.nodes || [];

        const commits = repos.reduce(
          (acc, repo) =>
            acc + (repo?.defaultBranchRef?.target?.history?.totalCount || 0),
          0
        );

        const languageSet = new Set();
        repos.forEach((repo) => {
          const langs = repo?.languages?.nodes || [];
          langs.forEach((lang) => {
            if (lang?.name) languageSet.add(lang.name);
          });
        });

        setRepoCount(json.data.user.repositories.totalCount);
        setTotalCommits(commits);
        setTechCount(languageSet.size);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchGitHubStats();
  }, [token, username]);

  const stats = [
    { num: 1, text: "Years of Experience" },
    { num: repoCount, text: "Projects Completed" },
    { num: techCount, text: "Technologies Mastered" },
    { num: totalCommits, text: "GitHub Commits" },
  ];

  return (
    <div className="mx-auto w-full py-4">
      <SectionHeading
        eyebrow="The Numbers"
        title="Milestones That"
        highlight="Matter"
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const meta = STAT_META[index] || STAT_META[0];
          const Icon = meta.icon;
          return (
            <GlassCard
              key={index}
              className="text-center"
              innerClassName="p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            >
              <div
                className={`mx-auto flex size-12 items-center justify-center rounded-full bg-gradient-to-br ${meta.gradient} text-white shadow-lg ${meta.glow}`}
              >
                <Icon className="text-lg" />
              </div>
              <CountUp
                end={item.num}
                duration={2.5}
                delay={0.3}
                suffix="+"
                className={`mt-4 block bg-gradient-to-r ${meta.gradient} bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl`}
              />
              <p className="mt-2 text-sm font-semibold tracking-wide text-black/60 lg:text-base dark:text-gray-300">
                {item.text}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;