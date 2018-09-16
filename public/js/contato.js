function toggleFABMenu(btn) {

    $this = btn;
    if ($this.hasClass('active') === false) {
        $this.addClass('active');
        $this.find('ul .btn-floating').velocity({
            scaleY: ".4",
            scaleX: ".4",
            translateY: "40px"
        }, {
            duration: 0
        });

        var time = 0;
        $this.find('ul .btn-floating').reverse().each(function () {
            $(this).velocity({
                opacity: "1",
                scaleX: "1",
                scaleY: "1",
                translateY: "0"
            }, {
                duration: 80,
                delay: time
            });
            time += 40;
        });
    } else {
        $this.removeClass('active');
        var time = 0;
        $this.find('ul .btn-floating').velocity("stop", true);
        $this.find('ul .btn-floating').velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: "40px"
        }, {
            duration: 80
        });
    }
}