import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = "./cards";

function stampDates(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fp = path.join(dir, file);
        const stat = fs.statSync(fp);

        if (stat.isDirectory()) {
            stampDates(fp);
        } else if (file.endsWith(".md") || file.endsWith(".njk")) {
            const fileContent = fs.readFileSync(fp, "utf-8");
            const { data, content } = matter(fileContent);

            if (!data.created) {
                const createdDate = stat.birthtime.toISOString();
                data.created = createdDate;

                const updatedContent = matter.stringify(content, data);
                fs.writeFileSync(fp, updatedContent);
                
                console.log(`Stamped ${file} with: ${createdDate.split('T')[0]}`);
            }
        }
    });
}

stampDates(CONTENT_DIR);