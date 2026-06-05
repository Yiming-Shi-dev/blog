$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
        $('.hamburger span').toggleClass('active');
    });

    $('.nav-links a').click(function() {
        $('.nav-links').removeClass('active');
        $('.hamburger span').removeClass('active');
    });

    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        var filter = $(this).data('filter');
        
        if (filter === 'all') {
            $('.post-card').fadeIn();
        } else {
            $('.post-card').fadeOut();
            $('.post-card[data-category="' + filter + '"]').fadeIn();
        }
    });

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name && email && message) {
            alert('感谢您的留言，' + name + '！我会尽快回复您。');
            $('#contactForm')[0].reset();
        }
    });

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        
        if (scrollPos > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }

        $('section').each(function() {
            var top = $(this).offset().top - 100;
            var bottom = top + $(this).height();
            
            if (scrollPos >= top && scrollPos <= bottom) {
                var id = $(this).attr('id');
                $('.nav-links a').removeClass('active');
                $('.nav-links a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    $('.nav-links a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top - 60;
        
        $('html, body').animate({
            scrollTop: offset
        }, 800);
    });

    $('.btn').click(function(e) {
        var href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            var offset = $(href).offset().top - 60;
            
            $('html, body').animate({
                scrollTop: offset
            }, 800);
        }
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.nav-links').removeClass('active');
            $('.hamburger span').removeClass('active');
        }
    });

    $('.post-card').hover(function() {
        $(this).find('.read-more').css('transform', 'translateX(10px)');
    }, function() {
        $(this).find('.read-more').css('transform', 'translateX(0)');
    });

    $('.read-more').click(function(e) {
        e.preventDefault();
        var postTitle = $(this).closest('.post-card').find('.post-title').text();
        alert('文章《' + postTitle + '》正在加载中...');
    });
});