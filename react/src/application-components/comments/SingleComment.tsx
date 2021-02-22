import React from 'react';
import { ISingleComment } from './types';

const SingleComment: React.FC<ISingleComment> = ({ comment }) => {
	const { login, firstName, lastName, text, datetime, pluses, minuses, temporary } = comment;
	return (
		<div className="single-comment">
			<div className="single-comment-author">
				{temporary ? 'Anonimowy': firstName && lastName ? `${firstName} ${lastName}` : login}
			</div>
			<div className="flex-grow">
				<div className="flex flex-grow">
					<div className="flex-grow single-comment-text">{text}</div>
					{false &&
						<div className="single-comment-marks">
							<span className="green-text">{pluses}</span>
							<span className="red-text ">{minuses}</span>
						</div>
					}
				</div>
				<div className="single-comment-date">{datetime}</div>
			</div>
		</div>
	);
};

export default SingleComment;
