const posts = function () {
    const showMessage = (message, elementId, elementClassName) => {        
        $('#id-posts-container').html(`<div id="${elementId}" class="${elementClassName}">${message}</div>`);
    };

    const fetchPosts = () => {
        const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';
        $.ajax({
            url: postsApiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                $('#id-posts-container').empty();
                if(data.length === 0) {
                    // TODO present error in ui
                    console.log('No data found.');
                    // No data to present
                    return;
                }

                data.forEach(function (post) {
                    const postElement =
                   `<div style="width: 500px; background-color: white;">
                        <div class="c-post-card">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                            <p>From user id: ${post.userId}</p>
                        </div>
                    </div>`

                    $('#id-posts-container').append(postElement);
                });
            },
            error: function (message) {
                console.error('fetchPosts function error message: ',message);
                showMessage('Error fetching data.', MESSAGE_ID.errorIdMessage, CLASS_NAMES.errorTextClass);
            }
        });
    };

    return {
        fetchPosts
    };

}();