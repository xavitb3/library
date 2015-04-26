<?php

Route::get('/', function()
{
	return View::make('index');
});

//API Routes
Route::group(array('prefix' => 'api'), function() 
{
	App::bind('League\Fractal\Serializer\SerializerAbstract', 'League\Fractal\Serializer\DataArraySerializer');
	Route::resource('projects', 'ProjectsController');
    Route::resource('projects.repositories', 'RepositoriesController');
});