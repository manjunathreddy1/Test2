import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { getSitePagesOrderedByCreatedDesc } from './services/pageService'; // adjust the path as needed

interface ISitePagesListProps {
  context: WebPartContext;
}

const SitePagesList: React.FC<ISitePagesListProps> = ({ context }) => {
  const [pages, setPages] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchPages = async () => {
      try {
        const results = await getSitePagesOrderedByCreatedDesc(context);
        setPages(results);
      } catch (err) {
        console.error("Error fetching site pages:", err);
      }
    };

    fetchPages();
  }, [context]);

  return (
    <div>
      <h3>Recent Site Pages</h3>
      <ul>
        {pages.map(page => (
          <li key={page.Id}>
            <a href={page.FileRef} target="_blank" rel="noopener noreferrer">{page.Title}</a> - {new Date(page.Created).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitePagesList;
