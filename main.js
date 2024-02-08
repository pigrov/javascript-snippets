var element = $(document.createElement(`div`));

element
    .attr({
        contenteditable: true,
    })
    .on(`paste`, function (e) {
        e.preventDefault();
        document.execCommand(
            `insertHTML`,
            false,
            (e.originalEvent || e).clipboardData.getData(`text/plain`)
        );
    });
