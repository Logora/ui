import React from 'react';
import { useIntl } from "react-intl";
import { Link } from '@logora/debate.action.link';
import { ContextSourceBox } from "@logora/debate.source.context_source_box";
import styles from './ContextSourceList.module.scss';
import PropTypes from "prop-types";

export const ContextSourceList = ({ sources = [] }) => {
    const intl = useIntl();

    const displaySource = (source) => {
        return (
            <Link to={source.source_url} key={source.id} target="_blank" external>
                <ContextSourceBox imageUrl={source.origin_image_url} author={source.publisher} title={source.title} date={source.published_date} />
            </Link>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>{intl.formatMessage({ id: "source.context_source_list.title", defaultMessage: "Debate context"})}</span>
            </div>
            <div className={styles.content}>{sources.map(displaySource)}</div>
        </div>
    )
}

ContextSourceList.propTypes = {
    /** A list of articles to display */
    sources: PropTypes.arrayOf(PropTypes.shape({
        /** ID of the source to be used as a unique source */
        id: PropTypes.number,
        title: PropTypes.string,
        source_url: PropTypes.string,
        published_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date) ]),
        publisher: PropTypes.string,
        origin_image_url: PropTypes.string
    }))
}