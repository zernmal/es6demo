module.exports = function(grunt) {

    var srcRoot = './src';
    var buildRoot = './build';
    
    require('load-grunt-tasks')(grunt); 

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                modules : 'amd',

            },
            trans: {
                expand: true,
                cwd: srcRoot,
                src: ['**/*.js'],
                dest: buildRoot
            }
        },
        watch:{
            babel: {
                files: srcRoot + "**/*.js",
                tasks: ['babel'],
                options: {
                    debounceDelay: 50
                }
            }
        }
    });

    grunt.registerTask('default', ['babel']);
}