# ASP.NET Core MVC Grunt Skeleton Project

## Project

* Visual Studio Community 2017

* .Net Core 2.2

* ASP.Net MVC


## Sources

* [Setting Up Grunt](https://docs.microsoft.com/en-us/aspnet/core/client-side/using-grunt?view=aspnetcore-2.2)
* [Setting Up Sass](https://dzone.com/articles/how-to-use-sass-in-aspnet-core-20-mvc)

* ### Live Reload

  * [Stack Overflow](https://stackoverflow.com/questions/20194787/livereload-asp-net-mvc-web-app-with-grunt)
  * [Github GruntJS](https://github.com/gruntjs/grunt-contrib-watch)
  * [Gruntfile.js](https://github.com/bdalldorf/ASP.NET-Core-MVC-Grunt-Skeleton-Project/blob/master/Core%20MVC%20Grunt%20Skeleton%20Project/Gruntfile.js)
    ```javascript        
    watch: {
      files: ["TypeScript/*.js", "Style/*.scss"],
      tasks: ["updateJS", "updateCSS"],
      views: {
        files: ["Views/**/*.cshtml",
        "wwwroot/**/*.css",
        "wwwroot/**/*.js",
        "bin/**/*.dll"],
          options: {
            livereload: {
              host: 'localhost',
              port: 9000,
            }
          }
        }
      }
      ```
  * [_Layout.cshtml](https://github.com/bdalldorf/ASP.NET-Core-MVC-Grunt-Skeleton-Project/blob/master/Core%20MVC%20Grunt%20Skeleton%20Project/Views/Shared/_Layout.cshtml)
    ```html
    <environment include="Development">
        <script src="http://localhost:9000/livereload.js"></script>
        <script src="~/lib/jquery/dist/jquery.js"></script>
        <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.js"></script>
    </environment>    
    ```
