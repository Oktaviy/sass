
var gulp      = require('gulp'),
	smartgrid = require('smart-grid'),
	gcmq      = require('gulp-group-css-media-queries');
	
gulp.task('media', function () {
    gulp.src('css/**/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('media-css'));
});

var settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    mobileFirst: false,
    container: {
        maxWidth: '1200px',
        fields: '0'
    },
    breakPoints: {
        lg: {
            width: '1100px',
            fields: '15px'
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
        },
        xs: {
            width: '560px'
        }
    }
};

smartgrid('smartgrid', settings);


	

