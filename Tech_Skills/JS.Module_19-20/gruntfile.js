module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/script.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/src',
          src: ['style.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['css/src/*.scss'],
        tasks: ['sass'],
      },
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};