import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StoriesNavigation from '../components/StoriesNavigation';
import StoriesPreview from '../components/StoriesPreview';

class StoriesIndex extends React.Component {
  static propTypes = {
    location: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, location, pageContext } = this.props;

    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Stories"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          return <StoriesPreview post={node} />;
        })}
        <StoriesNavigation pageContext={pageContext} />
      </Layout>
    );
  }
}

export default StoriesIndex;

export const pageQuery = graphql`
  query($limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
