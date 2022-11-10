exports.addIsCreator = (idea, userId) => {
    idea.is_creator = idea.creator_id === userId;
    return idea;
}