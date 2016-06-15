module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/libs/*.js', 'js/src/*.js'],
        dest: 'js/build/script.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/build/script.js'],
        dest: 'js/build/script.min.js'
      }
    },
    sass: {
      dist: {
        options: {
            style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'css/src',
          src: ['style.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'img/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'img/'
          }]
      }
    },
    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        }
      },
      sass: {
        files: ['css/src/*.scss'],
        tasks: ['sass'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('imagemin', ['imagemin']);

};