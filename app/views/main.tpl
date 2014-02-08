<div id="main">
	<div class="row">
		<article class="small-12 small-centered medium-6 medium-uncentered large-4 large-uncentered columns" ng-repeat="($id, item) in remoteData">
			<img ng-src="{{item.url}}" alt="{{item.title}}">
			<h2>{{item.title}}</h2>
			<p>{{item.desc}}</p>
			<a href="#/detail/{{$id}}">View Project</a>
		</article>
	</div>
</div>