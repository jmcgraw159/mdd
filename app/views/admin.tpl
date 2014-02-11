<div ng-controller="AdminCtrl" class="row" id="admin">
  <div class="small-12 small-centered large-12">
    <input type="text" ng-model="portfolio.title" placeholder="Project Title">
    <input type="text" ng-model="portfolio.url" placeholder="Project Image Url">
    <input type="text" ng-model="portfolio.desc" placeholder="Project Description">
    <a ng-click="saveData()">Add Project</a>
  </div>
</div>