import React from 'react';

const VideoDetail = ({video}) => {
	if( !video ){
		return <div>{'loading....'}</div>
	}
	const { id } = video;
	if( !id ){
		return <div>{'ummmmm no id, so i dont know what to load!!! check your object return'}</div>
	}	
	const url = `https://www.youtube.com/embed/${id}`;
	return (
		<div className={'video-detail col-md-8'}>
			<div className={'embed-responsive embed-responsive-16by9'}>
				<iframe className={'embed-responsive-item'} src={url}></iframe>
			</div>
			<div className={'details'}>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
	    </div>
	);
 };

export default VideoDetail