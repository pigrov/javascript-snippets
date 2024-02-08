var element = $(document.createElement(`div`));

element
    .attr({
        contenteditable: true,
    })
    .on(`paste`, function (e) {
        e.preventDefault();
        // When copying, the text inserts the formatted text into the edited div.
        document.execCommand(
            `insertHTML`,
            false,
            (e.originalEvent || e).clipboardData.getData(`text/plain`)
        );
    });
