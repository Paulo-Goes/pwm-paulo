fetch(`https://api.github.com/repos/Paulo-Goes/pwm-paulo/commits`)
  .then(response => response.json())
  .then(data => {
    const latestCommitHash = data[0].sha.substring(0, 7);
    document.getElementById('commit-hash').textContent = latestCommitHash;
  })
  .catch(error => {
    console.error('Error fetching the commit hash:', error);
    document.getElementById('commit').textContent = 'Error fetching the latest commit.';
  });
