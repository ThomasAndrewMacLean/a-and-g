const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allDatoCmsWorkshop {
                    edges {
                        node {
                            titel
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allDatoCmsWorkshop.edges.map(({ node: work }) => {
                createPage({
                    path: `workshops/${work.titel}`,
                    component: path.resolve(`./src/templates/workshop.js`),
                    context: {
                        titel: work.titel
                    }
                });
            });
            resolve();
        });
    });
};
