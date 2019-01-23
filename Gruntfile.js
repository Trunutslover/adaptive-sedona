const sass = require('node-sass');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'build/css/style.css': 'sass/style.scss'
                }
            }
        },
        csso: {
            style: {
                options: {
                    report: "gzip"
                },
                files: {
                    "build/css/style.min.css": ["build/css/style.css"]
                }
            }
        },
        posthtml: {
            options: {
                use: [
                    require("posthtml-include")()
                ]
            },
            html: {
                files: [{
                    expand: true,
                    src: ["*.html"],
                    dest: "build"
                }]
            }

        },
        watch: {
            html: {
                files: ["*.html"],
                tasks: ["posthtml"]
            },
            style: {
                files: ["sass/**/*.scss"],
                tasks: ["sass", "csso"]
            },
            newfiles: {
                files: ["img/**"],
                tasks: ["copy"]
            }
        },
        browserSync: {
            server: {
                bsFiles: {
                    src: ["build/*.html", "build/css/*.css"]
                },
                options: {
                    server: "build/",
                    watchTask: true
                }
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: "",
                    src: [
                        "fonts/**/*.{woff,woff2}",
                        "img/**",
                        "js/**"
                    ],
                    dest: "build"
                }]
            }
        },
        clean: {
            build: ["build"]
        }
    });

    grunt.registerTask('serve', ['browserSync', 'watch']);
    grunt.registerTask("build", ["clean", "copy", "sass", "csso", "posthtml"]);
};