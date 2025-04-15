"""Module for retrieving newsfeed information."""

from dataclasses import dataclass
from datetime import datetime
from app.utils.redis import REDIS_CLIENT


@dataclass
class Article:
    """Dataclass for an article."""

    author: str
    title: str
    body: str
    publish_date: datetime
    image_url: str
    url: str

    def to_dict(self):
        return {
            'author': self.author,
            'title': self.title,
            'body': self.body,
            'publish_date': self.publish_date,
            'image_url': self.image_url,
            'url': self.url
        }


def get_all_news() -> list[Article]:
    """Get all news articles from the datastore."""
    # 1. Use Redis client to fetch all articles
    # 2. Format the data into articles
    # 3. Return a list of the articles formatted
    data = REDIS_CLIENT.get_entry("all_articles")
    f_data = []
    for article in data:
        f_data.append(_format_article(article).to_dict())
    return f_data

def _format_article(article):
    f_article =  Article(
        author=article.get('author'),
        title= article.get('title'),
        body=article.get('text'),
        publish_date=article.get('published'),
        image_url=article['thread']['main_image'],
        url=article.get('url')
    )
    return f_article


def get_featured_news() -> Article | None:
    """Get the featured news article from the datastore."""
    # 1. Get all the articles
    data = get_all_news()
    # 2. Return as a list of articles sorted by most recent date
    # data = sorted(data, key= lambda x: time.mktime(time.strptime(x['publish_date'],"%Y-%m-%dTH:M:S.A")))
    return data
