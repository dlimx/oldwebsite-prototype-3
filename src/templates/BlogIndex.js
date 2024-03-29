import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogIntro from '../components/BlogIntro';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import BlogNavigation from '../components/BlogNavigation';
import BlogPreview from '../components/BlogPreview';

import profile from '../../content/assets/profile-pic.jpg';

class BlogIndex extends React.Component {
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
      <Layout
        right={
          <img
            src={profile}
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          />
        }
        location={location}
        title={siteTitle}
      >
        <SEO
          title="Stories"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BlogIntro />
        {posts.map(({ node }) => (
          <BlogPreview post={node} key={node.fields.slug} />
        ))}
        <BlogNavigation pageContext={pageContext} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const blogIndexQuery = graphql`
  query($limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      filter: { collection: { eq: "posts" } }
    ) {
      edges {
        node {
          collection
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
