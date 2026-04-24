export function getSortedProjects(projects) {
  return Object.entries(projects).sort((a, b) => {
    const projectA = a[1]
    const projectB = b[1]

    // Active first
    if (projectA.currentState === "Active" && projectB.currentState !== "Active") {
      return -1
    }
    if (projectA.currentState !== "Active" && projectB.currentState === "Active") {
      return 1
    }

    // Alphabetical fallback
    return projectA.title.localeCompare(projectB.title)
  })
}