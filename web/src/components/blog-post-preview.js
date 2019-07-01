import { format } from 'date-fns';
import { Link } from 'gatsby';
import React from 'react';
import { cn, getBlogUrl } from '../lib/helpers';
import PortableText from './portableText';

import styles from './blog-post-preview.module.css';
import { responsiveTitle3 } from './typography.module.css';

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.text}>
        {props.title && <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>}
        <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default BlogPostPreview;
