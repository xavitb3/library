module.exports = function(ngModule)
{
	require('./project-statistics-labels')(ngModule);
    require('./projects')(ngModule);
    require('./project')(ngModule);
    require('./ProjectsFactory')(ngModule);
    require('./ProjectsStatisticsFactory')(ngModule);
    require('./repositories/index')(ngModule);
    require('./links/index')(ngModule);
    require('./servers/index')(ngModule);
    require('./guides/index')(ngModule);
}