import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Feed.css';
import CardFeed from '../components/Cards/CardFeed';

import * as CourseActions from '../store/actions/course.js';
import * as PostsActions from '../store/actions/posts.js';

const Feed = ({ modules, toggleLesson, posts, togglePosts }) => (
    <>
        {console.log(modules)}
        {console.log(posts)}
        <CardFeed />
    </>
);

const mapStateToprops = state => ({
    modules: state.course.modules,
    posts: state.posts.feed
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson)),
    togglePosts: (feed) => dispatch(PostsActions.togglePosts(feed)),
})

export default connect(mapStateToprops, mapDispatchToProps)(Feed);