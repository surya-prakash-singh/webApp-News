import React from "react";
import { fetchPosts } from "../../utility/index";
import PropTypes from 'prop-types';
import _ from "lodash";


export interface Article {
  author: string;
  titlle: string;
  description: string;
  url: string;
}

interface Props {
  populateArticle: React.Dispatch<React.SetStateAction<any>>;
  status: React.Dispatch<React.SetStateAction<any>>;
}

const SearchBar: React.FC<Props> = ({ populateArticle, status }) => {
  const [searchInput, setSearchInput] = React.useState<string>("");

  const delayedQuery = _.debounce(() => callAPI(), 500);

  const filterArticles = (data: any): Article[] | undefined => {
    if (data) {
      const resultsArray = data.filter(
        (item: any) => item.author && item.title && item.description && item.url
      );
      return resultsArray.slice(0, 10);
    }
  };
  const callAPI = () => {
    fetchPosts(searchInput)
    .then((response) => response.json())
    .then((response) => filterArticles(response.articles))
    .then((data) => {populateArticle([]);populateArticle(data)}).then(()=> status(false))
    .catch((error) => {console.error(error);populateArticle([]);status(false);});
  }
  const handleSubmit = () => {
    if (searchInput) {
      delayedQuery();
    } else {
      populateArticle([])
      status(true);
    }
    return false;
  };

  const handleChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="form-search" role="form">
      <label className="search--label" htmlFor="search">
        Enter Keyword For News Search: Example British
      </label>

      <input
        id="search"
        type="text"
        value={searchInput}
        onChange={() => handleChange(event)}
        placeholder="Search for news.."
      />
      <button type="button" onClick={() => handleSubmit()}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  populateArticle: PropTypes.any,
  status: PropTypes.any,
};


export default SearchBar;
