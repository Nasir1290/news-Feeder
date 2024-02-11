import React, { useContext } from "react";
import newsContext from "../contexts/newsContext";
import { dateFormatter } from "../utils";

export default function NewsItems() {
  const { newses, setNewses } = useContext(newsContext);

  // here created a newsData variable , because from back end , in first render data come with name articles , but when i fetch data by search input then data come with the name of result,that's why put a condition here
  let newsData;
  if (newses?.articles) {
    newsData = newses.articles;
  }
  if (newses?.result) {
    newsData = newses.result;
  }
  return (
    <main className="my-10 lg:my-14">
      {newsData?.map((news, index) => (
        <div key={index} className="container mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            <div className="col-span-12 grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <a href={news.url} target="_blank">
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {news.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">{news.description}</p>
                <p className="mt-5 text-base text-[#5C5955]">{`${
                  index + 1
                } Hour ago`}</p>
              </div>
              {/* <!-- thumb --> */}
              <div className="col-span-12 lg:col-span-8">
                <img
                  className="w-[45rem] h-[18rem]"
                  src={
                    news.urlToImage ??
                    `https://source.unsplash.com/random/200x200?sig=${
                      index + 2
                    }`
                  }
                  alt="thumb"
                />
                <p className="mt-5 text-base text-[#5C5955]">{news.author}</p>
              </div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* <!-- news item --> */}
              <div className="col-span-12 mb-6 md:col-span-8">
                <img
                  className="w-[20rem] h-[10rem]"
                  src={`https://source.unsplash.com/random/200x200?sig=${
                    index + 22
                  }`}
                  alt="thumb"
                />
                {/* <!-- info --> */}
                <div className="col-span-12 mt-6 md:col-span-4">
                  <a>
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {news.title}
                    </h3>
                  </a>
                  {/* <p className="text-base text-[#292219]">{news.description}</p> */}
                  <p className="mt-5 text-base text-[#94908C]">
                    {dateFormatter(news.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
