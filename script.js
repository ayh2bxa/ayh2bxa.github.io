let currentProject = 1;
const totalProjects = 4;  // Modify this based on the number of projects you have

function navigate(direction) {
    // Hide the current project
    document.getElementById('project' + currentProject).style.display = 'none';
    
    // Calculate the new project number
    currentProject += direction;
    if (currentProject > totalProjects) {
        currentProject = 1;
    } else if (currentProject < 1) {
        currentProject = totalProjects;
    }
    
    // Show the new project
    document.getElementById('project' + currentProject).style.display = 'block';
}

function stopVideoPlayback() {
    // Pause native videos
    let videos = document.querySelectorAll('.project video');
    videos.forEach(video => {
        video.pause();
    });

    // Stop YouTube iframes
    let iframes = document.querySelectorAll('.project iframe');
    iframes.forEach(iframe => {
        let src = iframe.src;
        iframe.src = src;  // This effectively reloads the iframe, stopping the video
    });
}