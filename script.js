import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import javax.swing.*;
import java.awt.*;
import java.io.IOException;

public class BlogPageViewer {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> createAndShowGUI());
    }

    private static void createAndShowGUI() {
        JFrame frame = new JFrame("Blog Page Viewer");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);

        JScrollPane scrollPane = new JScrollPane();
        JTextPane textPane = new JTextPane();
        textPane.setContentType("text/html");

        try {
            String htmlContent = loadHTMLContent();
            textPane.setText(htmlContent);
        } catch (IOException e) {
            e.printStackTrace();
        }

        scrollPane.setViewportView(textPane);

        frame.getContentPane().add(scrollPane, BorderLayout.CENTER);
        frame.setVisible(true);
    }

    private static String loadHTMLContent() throws IOException {
        Document doc = Jsoup.parse(BlogPageViewer.class.getResourceAsStream("/path/to/your/file.html"), "UTF-8", "");

        // You can manipulate the HTML document using JSoup here if needed.

        return doc.html();
    }
}
