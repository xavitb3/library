module.exports = function(ngModule) {

    function Repositories($resource)
    {
        return $resource('api/projects/:projectId/repositories/:repositoryId', 
        	{ 
        		projectID : '@projectID',
        		repositoryId : '@repositoryId' 
        	});
    }

    ngModule.factory('Repositories', Repositories);
}