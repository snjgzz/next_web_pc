// app/newsList/page.tsx
import Link from "next/link";

// 模拟新闻数据
const newsData = [
  {
    id: 1,
    title: "人工智能技术突破：新模型超越人类认知能力",
    summary: "最新研究显示，新一代AI模型在多项测试中展现出超越人类的能力...",
    date: "2024-03-20",
  },
  {
    id: 2,
    title: "全球气候变化：各国承诺新减排目标",
    summary: "在最新的气候峰会上，多个国家提出了更激进的减排目标...",
    date: "2024-03-19",
  },
  {
    id: 3,
    title: "科技创新：量子计算机取得重大突破",
    summary:
      "研究人员成功实现了新的量子位控制方法，为量子计算发展开辟新方向...",
    date: "2024-03-18",
  },
];
export default function NewsList() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">最新新闻</h1>
      <div className="space-y-6">
        {newsData.map((news) => (
          <Link
            href={`/new/${news.id}`}
            key={news.id}
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-100"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {news.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{news.summary}</p>
              <div className="text-sm text-gray-500">{news.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
