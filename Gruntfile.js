module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    createBookmarklet: {
      options: {
        dest: '<%= pkg.name %>.bookmarklet.js'
      }
    },
    build: {

    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('createBookmarklet', 'Build the bookmarklet.', function() {
    grunt.task.requires('uglify');

    var src = grunt.config.get('uglify.build.dest');
    var dest = grunt.config.get('createBookmarklet.options.dest');

    var code = grunt.file.read(src);
    grunt.file.write(dest, 'javascript:' + encodeURI(code));
  });

  grunt.registerTask('default', 'Build the bookmarklet', ['uglify', 'createBookmarklet']);
};
