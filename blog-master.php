<?php
include("db.php");
include 'fetch_meta.php';

$slug = $_GET['slug'] ?? '';

$blog = null;
$details = [];

if ($slug !== '' && $conn) {
    // Fetch main blog content using slug
    $sql = "SELECT * FROM blog_master WHERE slug = '$slug' LIMIT 1";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $blog = $result->fetch_assoc();
        $blogId = $blog['id'];

        // Fetch sub-sections (blog details)
        $sql_details = "SELECT * FROM blog_details WHERE blog_id = $blogId ORDER BY id ASC";
        $details_result = $conn->query($sql_details);

        if ($details_result && $details_result->num_rows > 0) {
            while ($row = $details_result->fetch_assoc()) {
                $details[] = $row;
            }
        }
    }
}

// ✅ Meta tags
$pageTitle = $blog ? $blog['seo_title'] . " | Digify Soft Solutions" : "Blog Details | Digify Soft Solutions";
$pageDescription = $blog ? substr(strip_tags($blog['meta_description']), 0, 160) : "Read informative blogs from Digify Soft Solutions about CRM, ERP, business automation, and more.";
$pageKeywords = $blog['tags'] ?? 'erp, crm, digify';

include 'top.php';
include 'header.php';
?>

<style>
.blog-detail-wrapper {
  max-width: 950px;
  margin: 60px auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  padding: 40px;
  border: 1px solid #eee;
}

.blog-detail-image {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 30px;
}

.blog-detail-title {
  font-size: 34px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.3;
}

.blog-detail-main {
  font-size: 17px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 40px;
}

.blog-subsection {
  margin-bottom: 40px;
}

.blog-subsection h3 {
  font-size: 24px;
  color: #0ca678;
  font-weight: 700;
  margin-bottom: 14px;
}

.blog-subsection p {
  font-size: 16px;
  color: #444;
  line-height: 1.7;
}

.blog-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f0f0f0;
  color: #333;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.blog-back-btn:hover {
  background: #ddd;
}

@media (max-width: 768px) {
  .blog-detail-wrapper {
    padding: 25px;
  }
  .blog-detail-title {
    font-size: 26px;
  }
  .blog-subsection h3 {
    font-size: 20px;
  }
}
</style>

<div class="blog-detail-wrapper">
  <?php if ($blog): ?>

         <!-- Blog Main Image (on top) -->
      <?php if (!empty($blog['main_image']) && $blog['main_image'] !== 'no-image.png'): ?>
        <div style="margin-bottom: 20px;">
          <img src="/website_login/admin/uploads_img/<?php echo htmlspecialchars($blog['main_image']); ?>" 
               alt="<?php echo htmlspecialchars($blog['main_title']); ?>" 
               style="width: 80%; height: auto; border-radius: 8px;">
        </div>
      <?php endif; ?>
    <h1 class="blog-detail-title"><?php echo htmlspecialchars($blog['main_title']); ?></h1>

    <div class="blog-detail-main">
      <?php echo $blog['main_paragraph']; ?>
    </div>

    <?php if (!empty($details)): ?>
      <?php foreach ($details as $d): ?>
        <div class="blog-subsection">
          <?php if (!empty($d['sub_title'])): ?>
            <h3><?php echo htmlspecialchars($d['sub_title']); ?></h3>
          <?php endif; ?>
          <?php if (!empty($d['sub_paragraph'])): ?>
            <p><?php echo $d['sub_paragraph']; ?></p>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>

    <div style="text-align:center; margin-top:40px;">
      <a href="blog.php" class="blog-back-btn">
        <i class="fas fa-arrow-left"></i> Back to Blogs
      </a>
    </div>

  <?php else: ?>
    <p style="text-align:center; padding:100px;">Blog not found.</p>
  <?php endif; ?>
</div>

<?php include 'footer.php'; ?>
