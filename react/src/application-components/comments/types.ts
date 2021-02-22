export interface IComment {
    login: string, firstName: string,
    lastName: string,
    text: string,
    datetime: string,
    pluses: string,
    minuses: string,
    commentId: string,
    temporary: string
}
export interface ISingleComment {
    comment: IComment
}
