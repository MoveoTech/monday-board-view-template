export const queries = {
    getWorkspaceId: `query ($boardIds: [Int]!){
        boards (ids: $boardIds) {
          workspace {
            id
          }
        }
    }`  
}