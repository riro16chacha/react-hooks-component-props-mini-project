import React from "react";
import Article from "./Article";

function ArticleList ({posts}){
    return(
        <main>
            {posts.map((article)=>(
                <Article
                   key={article.id}
                   title={article.id}
                   date={article.id}
                   preview={article.id}
                />   
            ))}
        </main>
    );
}
export default ArticleList;